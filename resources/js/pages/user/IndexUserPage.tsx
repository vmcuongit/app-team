import ThemeControl from '@/components/themeControl';

import { useUsers } from '@/features/user';

interface Props {
    name: string,
    age: number
}

const IndexPage = ({name, age}: Props) => {
    const { users, loading } = useUsers();

    return (
        <div className='mx-auto p-5 text-center'>
            <h1>Xin chào {name}</h1>
            <div>Tuổi của bạn là {age}</div>
            <div className='mt-5 mb-5'>
                <ThemeControl />
            </div>
            <div className='mt-5 mb-5'>Danh sách user</div>
            <div className='border-x-secondary'>
                {loading ? (
                <div className='text-center'>
                    Đang tải dữ liệu...
                </div>
            ) : (
                <>
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className='p-3 my-3 border text-left rounded-lg shadow-sm'>
                                <div className='font-semibold text-blue-600'>Tên: {user.name}</div>
                                <div>Email: {user.email}</div>
                                {user.address && (
                                    <div>Địa chỉ: {user.address.street}, {user.address.suite}, {user.address.city}</div>
                                )}
                                {user.company && (
                                    <div>Công ty: {user.company.name}</div>
                                )}
                                <div>Số điện thoại: {user.phone}</div>
                            </div>
                        ))
                    ) : (
                        <div>Không có dữ liệu người dùng.</div>
                    )}
                </>
            )}
            </div>
        </div>
    )
}
 
export default IndexPage;