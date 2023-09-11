import ExpenseTable from "@/components/ExpenseTable";
import prisma from "@/db";
import Link from "next/link";

function getExpenses() {
    return prisma.expense.findMany();
}

async function deleteExpense(id: string) {
    "use server";

    await prisma.expense.delete({
        where: {
            id,
        },
    });
}

export default async function Home() {
    const expenses = await getExpenses();

    return (
        <>
            <header>
                <nav className="flex justify-between">
                    <h1 className="text-2xl">Expenses List</h1>
                    <Link href="/add">
                        <button className="border border-slate-300 px-6 py-1 rounded hover:bg-slate-950">
                            Add
                        </button>
                    </Link>
                </nav>
            </header>
            <main className="mt-6">
                <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
            </main>
        </>
    );
}
