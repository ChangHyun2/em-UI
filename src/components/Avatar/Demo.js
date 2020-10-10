import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import Avatar from './Avatar'
import Sizer from '../Sizer/Sizer'
import { Icon, path } from '../SVGIcon'
import Container from '../Container/Container'
console.log(path)

const randomPerson = "https://randomuser.me/api/"

const Demo = () => {
    const [persons, setPersons] = useState(null)

    let personsAvatar;

    useEffect(() => {
        fetch(randomPerson + "?results=5")
            .then(res => res.json())
            .then(data => {
                const { info, results } = data;
                setPersons(results)
            })
    }, [])


    if (persons) {
        personsAvatar = persons.map(personInfo => {
            const { phone, picture, location, name, dob, email, gender } = personInfo

            return <Avatar key={email + phone} src={picture.thumbnail} alt={name.first + name.last} />
        })
    }

    return <>
        <Container spacing={10} justify={'center'}>
            {persons ? personsAvatar : null}
        </Container>
        <Container size={25} spacing={10} justify={'center'}>
            <Avatar length={40} color={'blue-A700'}>H</Avatar>
            <Avatar length={40} color={'red-A700'}>H</Avatar>
            <Avatar length={40} color={'yellow-A700'}>H</Avatar>
            <Avatar length={40} color={'purple-A700'}>H</Avatar>
        </Container>
        <Container spacing={10} justify={'center'}>
            <Avatar length={30} color={'purple-A700'}>
                <Icon svg={path.batteryCharging} width={15} height={15} color={'#fff'} />
            </Avatar>
            <Avatar length={30} color={'blue-A700'}>
                <Icon svg={path.badgeHdFill} width={15} height={15} color={'#fff'} />
            </Avatar>
            <Avatar length={30}>
                <Icon svg={path.backCheckFill} width={15} viewBox={'0 0 17 17'} height={15} color={'#fff'} />
            </Avatar>
        </Container>
    hello
    </>
}

export default Demo;