import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { MovieModel } from '../../interfaces/movie.interface';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	movies: MovieModel[];
}