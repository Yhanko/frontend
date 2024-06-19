import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';

import EquipeProgram from '../../../../public/Abou-us-Video(3).png';

export function ThinkContent(){
    return(
        <div className='flex flex-row w-screen h-[400px]'>
        <div className='flex flex-col ml-16 w-[38rem] h-[32rem]'>
            <div className='w-[5rem] h-1 bg-[#57007B] bg-gradient-to-r from-[#57007B] to-[#F76680]'></div>
            <h2 className='font-bold text-[2.2rem] text-justify text-[#1A202C] mt-4'>Faremos do seu<br/> pensamento um projeto</h2>
            <p className='text-[1.2rem] text-[#718096] text-justify mt-4'><span className='text-[#F76680]'>Dar vida as suas ideias,</span>, deixando tudo 
                ao seu gosto, tornando <br/> tudo mais 
                profissional e criativo
            </p>
            <div className='flex flex-row space-x-4 mt-10'>
                <a href="#" className='text-[#57007B]'>Mais informações sobre</a>
                <ArrowRight size={24} color='#57007B'/>
               
            </div>

            <div className='flex flex-col mt-[9rem] w-[4rem]'>
                <span className='fent-bold text-[2.2rem] text-[#57007B]'>2</span>
                <div className='w-[4rem] h-1 bg-[#57007B] bg-gradient-to-r from-[#57007B] to-[#F76680]'></div>
            </div>
        </div>

        <Image src={EquipeProgram} alt='Imagem' className='h-[23rem] w-[40rem] rounded-md'/>
    </div>
    )
}