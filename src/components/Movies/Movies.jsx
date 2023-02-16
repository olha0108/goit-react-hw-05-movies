import React from 'react';
import { SearchbarHeader } from './Movies.styled';
import { SearchForm } from './Movies.styled';
import { SearchFormbutton } from './Movies.styled';
import { SearchFormbuttonlabel } from './Movies.styled';
import { SearchForminput } from './Movies.styled';
import { MoviesGalleryItem } from './Movies.styled';
import { MoviesGalleryContainer } from './Movies.styled';

export const Movies = () => {
    return (
        <>
            <SearchbarHeader>
                <SearchForm >
                    <SearchForminput
                        type="text"
                        name="search"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                    <SearchFormbutton type="submit">
                        <SearchFormbuttonlabel>Search</SearchFormbuttonlabel>
                    </SearchFormbutton>
                </SearchForm>
            </SearchbarHeader>

            <MoviesGalleryContainer>

                <MoviesGalleryItem

                />

            </MoviesGalleryContainer>

        </>
    );
};
