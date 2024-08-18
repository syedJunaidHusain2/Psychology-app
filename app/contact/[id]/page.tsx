import React from 'react';

const Slug = ({ params }: { params: { id: string } }) => {
    const { id } = params;  
    console.log(id);
    
    const differentiator = () => {
        const numericId = Number(id);

        if (numericId === 1) {
            return 'Slug 1';
        } else if (numericId === 2) {
            return 'Slug 2';
        } else if (numericId === 3) {
            return 'Slug 3';
        } else if (numericId === 4) {
            return 'Slug 4';
        } else {
            return 'Slug 5';
        }
    };

    return (
        <div>
            {differentiator()}
        </div>
    );
};

export default Slug;
