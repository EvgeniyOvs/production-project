import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterAction} from "../model/slice/counterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";


export const Counter = () => {

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const {t} = useTranslation()
    const increment = () => {
        dispatch(counterAction.increment())
    }
    const decrement = () => {
        dispatch(counterAction.decrement())
    }

    return (
        <div >
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}

            </Button>
        </div>
    );
};

