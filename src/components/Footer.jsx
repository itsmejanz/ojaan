import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconMapPin2,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='flex flex-col gap-1 '>
                <div className='flex gap-2 md:py-3 py-4'>
                    <a
                        className='hover:text-secondary transition-all duration-300 ease-linear'
                        href='https://www.instagram.com/ojan.codes/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <IconBrandInstagram size={26} stroke={1} />
                    </a>
                    <a
                        className='hover:text-secondary transition-all duration-300 ease-linear'
                        href='https://x.com/ojanxsec'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <IconBrandX size={26} stroke={1} />
                    </a>
                    <a
                        className='hover:text-secondary transition-all duration-300 ease-linear'
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <IconBrandFacebook size={26} stroke={1} />
                    </a>
                    <a
                        className='hover:text-secondary transition-all duration-300 ease-linear'
                        href='https://www.linkedin.com/in/fauzansalammutaqin'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <IconBrandLinkedin size={26} stroke={1} />
                    </a>

                    <a
                        className='hover:text-secondary transition-all duration-300 ease-linear'
                        href='https://github.com/ojanteamx'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <IconBrandGithub size={26} stroke={1} />
                    </a>
                </div>
                <div className='flex gap-2 items-center hover:text-secondary transition-all duration-300 ease-linear'>
                    <IconMapPin2 stroke={1} size={16} />
                    {t('footerSection.address')}
                </div>
                <div className='flex gap-2 items-center hover:text-secondary transition-all duration-300 ease-linear'>
                    <IconBrandGmail stroke={1} size={16} />
                    {t('footerSection.email')}
                </div>
            </div>
        </div>
    );
}
