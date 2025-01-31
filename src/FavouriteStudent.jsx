import { Link } from "react-router-dom";
function FavouriteStudent(props) {
    const favstudent = props.favstudent;
    const setfavstudent = props.setfavstudent;
    const studentlist = props.studentlist;
    function handleDelete(removename) {
        var temp = favstudent.filter((item, index) => {
            if (item === removename) {
                return false;
            }
            else {
                return true;
            }
        })
        setfavstudent(temp);
        studentlist.forEach(element => {
            if (element.Studentname === removename) {
                element.disable = false;
            }
        })

    }
    return (
        <div>
            <div className='bg-red-400 p-10 flex gap-5'>
            <Link to='/'><h1 className='text-2xl font-bold  cursor-pointer underline'>List of Students</h1></Link>
            <Link to='/favouritestudent'><h1 className='text-2xl font-bold underline cursor-pointer'>Favourite Students</h1></Link>
            </div>
            {
                favstudent.map(function (item, index) {
                    console.log("favstudentitem :" + item);

                    return (
                        <div className="flex p-4">
                            <p className="w-40 text-lg">{index + 1}. {item}</p>
                            <button type='button' onClick={() => handleDelete(item)} className="bg-red-600 text-white cursor-pointer hover:text-gray-700 hover:bg-white border rounded-md p-1 ">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default FavouriteStudent