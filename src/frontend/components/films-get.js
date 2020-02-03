import batman from '../common/images/coverImages/batman.jpg';
import homealone from '../common/images/coverImages/homealone.jpg';
import inception from '../common/images/coverImages/inception.jpg';
import jurassicpark from '../common/images/coverImages/jurassicpark.jpg';
import lordoftherings from '../common/images/coverImages/lordoftherings.jpg';
import matrix from '../common/images/coverImages/matrix.jpg';
import pulpfiction from '../common/images/coverImages/pulpfiction.jpg';
import thelastsamurai from '../common/images/coverImages/thelastsamurai.jpg';
import toystory from '../common/images/coverImages/toystory.jpg';
import trainingday from '../common/images/coverImages/trainingday.jpg';

export default function getFilms() {
    return [
        {
            id: 'batman',
            title: 'Batman',
            img: batman,
            synopsis: `When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.`
        },
        {
            id: 'homealone',
            title: 'Home Alone',
            img: homealone,
            synopsis: `An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.`

        },
        {
            id: 'inception',
            title: 'Inception',
            img: inception,
            synopsis: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`
        },
        {
            id: 'jurassicpark',
            title: 'Jurassic Park',
            img: jurassicpark,
            synopsis: `During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.`
        },
        {
            id: 'lordoftherings',
            title: 'The Lord of the Rings',
            img: lordoftherings,
            synopsis: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`
        },
        {
            id: 'pulpfiction',
            title: 'Pulp Fiction',
            img: pulpfiction,
            synopsis: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`
        },
        {
            id: 'matrix',
            title: 'Matrix',
            img: matrix,
            synopsis: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`
        },
        {
            id: 'thelastsamurai',
            title: 'The Last Samurai',
            img: thelastsamurai,
            synopsis: `In Japan, Civil War veteran Captain Nathan Algren trains the Emperor's troops to use modern weapons as they prepare to defeat the last of the country's samurais. But Algren's passion is swayed when he is captured by the samurai and learns about their traditions and code of honor.`
        },
        {
            id: 'toystory',
            title: 'Toy Story',
            img: toystory,
            synopsis: `Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep.`
        },
        {
            id: 'trainingday',
            title: 'Training Day',
            img: trainingday,
            synopsis: `On his first day on the job as a Los Angeles narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the L.A.P.D. with a rogue detective who isn't what he appears to be.`
        }
    ];
}

