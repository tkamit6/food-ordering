'use client'
import React, { useEffect, useState } from 'react'
import UserTabs from '../../components/layout/UserTabs'
import { toast } from 'react-toastify';



export default function page() {
    const [isadmin, setisAdmin] = useState();
    const [newCategoryName, setnewCategoryName] = useState('');
    const [categoryFind, setCategoryFind] = useState([])
    const [editCategory, setEditCategory] = useState(null)

    const handleCategoryNameSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = { name: newCategoryName }
            if (editCategory) {
                data._id = editCategory.id
            }
            const resp = await fetch('/api/category/', {
                method: editCategory ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            console.log(resp)
            setnewCategoryName('')
            setEditCategory(null)
            fetcCategoryFunc()
            if (resp.ok) {
                toast.success('Category created successfully');
            } else {
                console.error('Failed to create category');
                toast.error('Error creating category');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred');
        }
    };

    useEffect(() => {
        fetcCategoryFunc()
    }, [])

    console.log(editCategory)

    async function fetcCategoryFunc() {
        try {
            const response = await fetch('/api/category');
            const data = await response.json();
            setCategoryFind(data);
        } catch (error) {
            console.error("Error fetching or setting category:", error);
            // Handle the error appropriately, e.g., show a user-friendly message.
        }
    }




    return (
        <section className='max-w-xl mx-auto my-8 '>
            <UserTabs isAdmin={true} />
            <label className='flex gap-2'>{
                editCategory ? 'Update Category' : `'New Category Name'`
            } {
                    editCategory && (<p className='font-bold'> {editCategory}</p>)
                }  </label>

            <form onSubmit={handleCategoryNameSubmit} className='grow flex gap-2'>
                <input type='text' value={newCategoryName} onChange={(e) => setnewCategoryName(e.target.value)} />
                <button type='submit' className='px-6 py-2 rounded-lg bg-red-600 text-white'> {editCategory ? 'Update' : 'Create'} </button>
            </form>

            <ul className='flex gap-2 justify-center my-3 flex-wrap'>
                {
                    categoryFind?.length > 0 && categoryFind.map((elem, id) => (
                        <li className='px-6 py-2 bg-gray-300' onClick={() => { setEditCategory(elem.name); setnewCategoryName(elem.name) }} key={id}>{elem.name}</li>
                    ))
                }
            </ul>
        </section >
    )
}
