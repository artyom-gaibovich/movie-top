import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MovieModel } from '../../interfaces/movie.interface';

export interface MovieProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	movie: MovieModel;
}