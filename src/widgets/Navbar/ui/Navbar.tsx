import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Navbar.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import React, {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur dolorum, ea incidunt laborum mollitia, nobis officiis pariatur provident repellendus sapiente sunt veniam voluptas. Aliquam inventore pariatur sint temporibus voluptatibus?
            </Modal>
        </div>
    );
};
