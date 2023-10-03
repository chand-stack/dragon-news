import { BsShare,BsBookmarkDash } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const News = ({news}) => {
    // console.log(news);
    const {author,title,image_url,details,rating,total_view,_id} = news;
    return (
        <div className='mt-10'>
            <div className='flex justify-between bg-gray-50 p-4'>
                <div className="flex gap-3 items-center">
                <img className="w-16 rounded-full" src={author?.img} alt="" />
                <div>
                    <h1 className='font-bold'>{author?.name}</h1>
                    <p className='text-gray-600'>{author?.published_date}</p>
                </div>
                </div>

                <div className='flex text-2xl gap-3 text-gray-600 items-center'>
                    <BsBookmarkDash/>
                    <BsShare/>
                </div>
            </div>
            <h1 className='text-2xl font-bold p-4'>{title}</h1>
            <img className='w-full px-4' src={image_url} alt="" />
            <p className='px-4 mt-5 font-semibold border-b pb-3'>{details.slice(0,250)}... <br />
            <span className='text-orange-400 text-xl'><Link to={`/news/${_id}`}>Read More</Link></span>
            </p>
            <div className='flex items-center justify-between border-b p-4'>
            <div className='flex items-center gap-2 '>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
</div>
<span className='text-xl font-semibold text-gray-600'>{rating?.number}</span>

            </div>
        <p className='text-xl flex gap-2 items-center font-semibold text-gray-600'> <AiFillEye className='text-2xl'/> {total_view}</p>

            </div>
        </div>
    );
};

News.propTypes = {
    news : PropTypes.object.isRequired
}

export default News;