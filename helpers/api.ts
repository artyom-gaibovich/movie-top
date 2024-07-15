export const API = {
	topPage: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/'
	},
	movie: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/movie/find'
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo'
	}
};