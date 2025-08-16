import Image from 'next/image';
import React from 'react'

const Copyright: React.FC = () => {
    return (
        <div className="flex items-center gap-1 pt-6">
            <Image
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/uSDmiqv1rC.svg"
                alt="Copyright"
                width={24}
                height={24}
                className="w-6 h-6"
            />

            <p className="text-neutral-900 font-semibold">
                2025 Edge Transport Solutions. All rights reserved.
            </p>
        </div>
    );
}

export default Copyright
