"use client"

import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

type ExpenseItemProps = {
    expenses: {
        id: string;
        title: string;
        amount: number;
        createdDate: Date;
    }[];
    deleteExpense: (id: string) => void;
};

const ExpenseTable = ({ expenses, deleteExpense }: ExpenseItemProps) => {
    return (
        <Table>
            <TableCaption>A list of your recent Expenses.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[300px]">Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {expenses.map((expense) => (
                    <TableRow key={expense.id}>
                        <TableCell className="font-medium">{expense.title}</TableCell>
                        <TableCell>{new Date(expense.createdDate).toLocaleDateString('en-GB')}</TableCell>
                        <TableCell className="text-right">{expense.amount}</TableCell>
                        <TableCell className="text-right">
                            <span
                                className="flex justify-center cursor-pointer"
                                onClick={() => deleteExpense(expense.id)}>
                                <Trash2 />
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ExpenseTable;
