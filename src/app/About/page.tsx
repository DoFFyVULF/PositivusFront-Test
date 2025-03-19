'use client'
import Header from '@/app/components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'reactstrap';
import '@/app/About/aboutStyle.css';

export default function About(){
    return(
        <Container>
            <Header />
        </Container>
    );
}

