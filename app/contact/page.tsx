import Link from 'next/link'
import React from 'react'
const data = [1, 2, 3, 4]
const Contact = () => {

    return (
        <div>Contact
            <div>
                {data.map((item, id) => (
                    <div>
                        <Link href={`/contact/${item}`}>Contact/{item}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact