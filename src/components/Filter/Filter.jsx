import { Label, InputFilter,FilterTitle } from './Filter.styled';
import { setFilter, getFilterValue } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterValue);

    const changeFilter = e => {
        if (e.target.value === '') {
            Notify.info('Who are you looking for?')
        }
        dispatch(setFilter(e.target.value));
    };

    return (<Label>
    <FilterTitle>Find contacts by name</FilterTitle>
        <InputFilter
            type="text"
            value={filter}
            onChange={changeFilter} />
    </Label>)
};


export default Filter;