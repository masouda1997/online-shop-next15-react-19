import React from 'react';

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
    const data = await params;
    console.log(data)
	return <div>{data.id}</div>;
};

export default page;
