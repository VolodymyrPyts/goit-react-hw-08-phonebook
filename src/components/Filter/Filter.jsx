
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/slice";

import { Label } from "./Filter.styled";
import { Input  } from "pages/RegisterPage/RegisterPage.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    const onChangeFilter = e => dispatch(setFilter(e.currentTarget.value));
    
    return (
        <Label>Find contacts by name
            <Input type="text" name="filter" value={useSelector(selectFilter)} onChange={onChangeFilter} />
        </Label>
    )
}

