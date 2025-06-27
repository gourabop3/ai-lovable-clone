"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import {useEffect, useState} from "react";

export default function Client() {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery();

    return (
        <div>
            Helllo
        </div>
    )
}