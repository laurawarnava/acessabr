import React, {useState, useEffect, useContext} from "react";
import { FilterContext } from '../../contexts/FilterContext';
import Card from "../Card";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import api from '../../config/api';


SwiperCore.use(Pagination)

function Slider() {
    const { filteredPlace, setFilteredPlace } = useContext(FilterContext)
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category=${filteredPlace}`)

            console.log(result)

            if (result.status === 200) {
                setPlaces(result.data.places)
            }
        }

        fetchPlaces()
    }, [filteredPlace]
 )
    return (
       <Swiper
            breakpoints={{
                300: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 2 
                },
                1024: {
                    slidesPerView: 4 
                }
            }}
        >
        {
            places.map(item => (
            <SwiperSlide key={item.id}>
                <Card key={item.id} item={item} />
            </SwiperSlide>
            ))
        }
        </Swiper>
    )
}

export default Slider;

