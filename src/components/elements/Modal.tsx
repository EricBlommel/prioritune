'use client'

import {useState} from 'react'
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {IconChevronRight, IconSearch} from "@tabler/icons-react";

export default function Modal() {
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 min-w-full sm:min-w-fit"
                    >
                        <div className="relative m-2 rounded-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <span className="text-gray-500">
                                    <IconSearch size={20}/>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search..."
                                className="block w-full rounded-xl border-0 py-1.5 pl-8 pr-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:leading-6"
                            />


                        </div>
                        <div className="flex m-2 p-2 gap-2 rounded-xl hover:bg-blue-200">
                            <img className="rounded-lg w-16 h-16" src={"../../../public/C418_cover.jpeg"}/>
                            <div className="flex flex-col justify-center flex-grow">
                                <span className="font-bold ">Subwoofer Lullaby</span>
                                <span className="text-sm">C418</span>
                            </div>
                            <div className="flex m-2 justify-center items-center">
                                <IconChevronRight className="size-8"/>
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
