import React from 'react';

const SectionDefaultLayout = (props) => {
    return (
        <section className={`container max-w-[1240px] mx-auto py-8 lg:py-16 ${props.tailwind}`} id={props.id}>
            {props.children}
        </section>
    );
};

export default SectionDefaultLayout;