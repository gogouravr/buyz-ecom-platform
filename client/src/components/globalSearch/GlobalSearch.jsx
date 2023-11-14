import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './GlobalSearch.scss';

export default function GlobalSearch() {
    return (
        <form className='global-search'>
            <input aria-label='Search products' className='global-search__input' type='text' />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label  */}
            <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}
