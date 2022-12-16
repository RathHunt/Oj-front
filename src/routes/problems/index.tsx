import { Pagination } from "flowbite-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/datatable.css";

/* TODO */

interface problem {
    title: string;
    alias: string;
    score: string;
    acCount: number;
    tryCount: number;
}

var problems: Array<problem> = [];

async function getProblems() {
    const response = await fetch("/api/problems");
    problems = await response.json();
}
export default function Contests() {
    const [page, setPage] = useState(1);
    function onPageChange(a) {
        setPage(a);
    }

    getProblems();

    return (
        <div>
            <h2 className="post-header">24 hour archive: Problems</h2>
            <div className="flex items-center justify-center text-center">
                {/* TODO: fix pagination */}
                <Pagination
                    currentPage={page}
                    layout="table"
                    onPageChange={onPageChange}
                    showIcons={true}
                    totalPages={problems.length}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Score</td>
                        <td>AC</td>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem) => (
                        <tr>
                            <td>{problem.alias}</td>
                            <td>
                                <NavLink
                                    to={`/problem/${problem.alias}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                            ? "pending"
                                            : ""
                                    }
                                >
                                    {problem.title}
                                </NavLink>
                            </td>
                            <td>{problem.score}</td>
                            <td>{problem.acCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-center text-center">
                <Pagination
                    currentPage={page}
                    layout="table"
                    onPageChange={onPageChange}
                    showIcons={true}
                    totalPages={problems.length}
                />
            </div>
        </div>
    );
}
