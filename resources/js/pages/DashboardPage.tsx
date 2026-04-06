import { Link } from '@inertiajs/react';
import {show} from '@wayfinder/actions/App/Http/Controllers/UserController';

export default function Welcome() {
    return (
        <>
            <Link type='button' href={show(1)} className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white">
                Xem User
            </Link>
        </>
    );
}
