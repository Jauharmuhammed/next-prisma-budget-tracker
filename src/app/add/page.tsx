import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import prisma from "@/db";
import { redirect } from "next/navigation";

async function createExpense(data: FormData) {
    "use server";

    const title = data.get('title')?.valueOf()
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid Title')
    }
    const amount = Number(data.get('amount')?.valueOf())
    if (amount === 0 || amount < 0) {
        throw new Error('Invalid Amount')
    }

    await prisma.expense.create({data: {
        title,
        amount
    }})
    redirect('/')
}

const Home = () => {
    return (
        <>
            <nav className="flex justify-between">
                <h1 className="text-2xl">Add New Expense</h1>
                <Link href="..">
                    <button className="border border-slate-300 px-6 py-1 rounded hover:bg-slate-950">
                        Back
                    </button>
                </Link>
            </nav>
            <form action={createExpense} className="flex flex-col gap-3 mt-6">
                <Input type="text" name="title" placeholder="Title" />
                <Input type="number" name="amount" placeholder="Amount" />
                <Button type="submit">Button</Button>
            </form>
        </>
    );
};

export default Home;
