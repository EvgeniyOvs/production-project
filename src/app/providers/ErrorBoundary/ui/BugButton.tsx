import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBundary
export const BugButton = ({ className } : BugButtonProps) => {
    const [error, setError] = useState(false);
    const {t} = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Пробросить ошибку')}
        </Button>
    );
};
