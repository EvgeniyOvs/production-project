
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
interface LoginFormProps {
    className?: string;
}
export const LoginForm = ( props : LoginFormProps) => {
    const {
    className,
    } = props;
    const {t} = useTranslation();

    return (

        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

