import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
export const CountrySelect = memo((props : CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const options = [
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Armenia, content: Country.Armenia },
        { value: Country.Russia, content: Country.Russia },
    ];

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />

    );
});
