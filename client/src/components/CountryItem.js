const CountryItem = ({country}) => {
    return (  
        <li>
           {country.name.common}
        </li>
    );
}
 
export default CountryItem;