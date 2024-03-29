import React from 'react';
import { SearchForm } from './common.style';
export const Search = ({ type }) => {
    return (
        <>
          {type === "round" && (
                <SearchForm className="search_form round">
                    <form action='#'>
                        <fieldset>
                            <legend>부고검색</legend>
                            <input type="text" className="search_input" placeholder="검색" />
                        </fieldset>
                        <a href="all_search.html" className="ico_sch">검색</a>
                    </form>
                </SearchForm>
          )}
          {type !== "round" && (
              <SearchForm className="search_form">
                  <form action='#'>
                      <fieldset>
                          <legend>고인명검색</legend>
                          <input type="text" className="search_input" placeholder="고인명검색" />
                      </fieldset>
                      <a href="all_search.html" className="ico_sch">검색</a>
                  </form>
              </SearchForm>
          )}
        </>
    );
}