'use client'

import React, { useState } from 'react'
import plus from '@/assets/tasksprintplus.png';
import pencil from '@/assets/editpencil.png';
import paintbrush from '@/assets/editpaintbrush.png';
import tag from '@/assets/HoverTag.png';
import Image from 'next/image';
import BoardCardComponent from './BoardCardComponent';
import { IUserData } from '@/interfaces/interfaces';
import { getExampleData } from '@/services/DataServices';

interface IMyBoardComponent {
    setIsAddBoard: (isBoardAdded: boolean) => void
}

const boards = ["OUR BOARD", "CHORES", "BOARD #3", "OUR BOARD", "CHORES"];

const MyBoardsComponent = (props: IMyBoardComponent) => {

    const [userData, setUserData] = useState<IUserData>(getExampleData())

    const [isTag1, setIsTag1] = useState<boolean>(false);
    const [isTag2, setIsTag2] = useState<boolean>(false);

    return (
        <div className='flex justify-between ms-[144px] me-[47px]'>
            <div className='mt-[91px]'>
                <div className='mx-auto text-center h-[315px] w-[310px] rounded-full border-black border-[1px]' style={{background: userData.userColor}}></div>
                <div className='flex justify-between -mt-12'>
                    <div>
                        <Image onMouseEnter={() => { setIsTag1(true) }} onMouseLeave={() => { setIsTag1(false) }} className='h-[45px] w-[45px]' src={paintbrush} alt='paintbrush' />
                        <div className='absolute -ml-[75px] mt-3'>
                            <div className={isTag1 ? 'relative w-full' : 'hidden relative w-full'}>
                                <Image src={tag} alt='hover tag' />
                                <h1 className='HammersmithOne text-[20px] w-full absolute top-[48.5%] text-center text-white'>Randomize Color</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image onMouseEnter={() => { setIsTag2(true) }} onMouseLeave={() => { setIsTag2(false) }} className='h-[45px] w-[45px]' src={pencil} alt='pencil' />
                        <div className='absolute -ml-[80px] mt-3'>
                            <div className={isTag2 ? 'relative w-full' : 'hidden relative w-full'}>
                                <Image src={tag} alt='hover tag' />
                                <h1 className='HammersmithOne text-[20px] w-full absolute top-[48.5%] text-center text-white'>Profile Picture</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='absolute mt-2'>
                <div className={isTag1 ? 'relative w-full' : 'hidden relative w-full'}>
                    <Image src={tag} alt='hover tag'/>
                    <h1 className='HammersmithOne text-[20px] w-full absolute top-[48.5%] text-center text-white'>Randomize Color</h1>
                </div>
                <div className={isTag2 ? 'relative w-full' : 'hidden relative w-full'}>
                    <Image src={tag} alt='hover tag'/>
                    <h1 className='HammersmithOne text-[20px] w-full absolute top-[48.5%] text-center text-white'>Profile Picture</h1>
                </div>
            </div> */}
                <h1 className='HammersmithOne text-center text-[64px]'>{userData.username}</h1>
                <h1 className='HammersmithOne text-center text-[40px]'>Joined {userData.joinDate}</h1>
            </div>
            <div className='mt-[53px]'>
                <div className='bg-white border-[1px] border-black rounded-[5px] h-[789px] w-[800px] overflow-auto'>
                    <div className='flex justify-center mt-[41px]'>
                        <h1 className='HammersmithOne text-[60px] h-[75px]'>MY BOARDS</h1>
                        <Image onClick={() => props.setIsAddBoard(true)} className='h-[35px] w-[35px] mt-[23px] ms-6 cursor-pointer' src={plus} alt='plus icon' />
                    </div>
                    <div className='mx-[63px] rounded-[5px] h-auto'>
                        {
                            userData.boards.map((board, idx) => {
                                return (
                                    <BoardCardComponent key={idx} projectName={board.name} colorID={idx % 3} members={board.members} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MyBoardsComponent
