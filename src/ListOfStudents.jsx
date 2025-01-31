import { Link } from "react-router-dom";
function ListOfStudents(props) {
    const favstudent = props.favstudent;
    const setfavstudent = props.setfavstudent;
    const studentlist = props.studentlist;
    function handleChange(name,item) {
        setfavstudent([...favstudent, name]);
        item.disable=true;
        console.log("Favourite student :" + favstudent);
    }
    return (
        <div>
            <div className='bg-red-400 p-10 flex gap-5'>
            <Link to='/'><h1 className='text-2xl font-bold  cursor-pointer underline'>List of Students</h1></Link>
            <Link to='/favouritestudent'><h1 className='text-2xl font-bold underline cursor-pointer'>Favourite Students</h1></Link>
            </div>
            <div className="p-5">
                {
                    studentlist.map(function (item) {
                        return (
                            <div className="flex gap-5 p-5">
                                <p className="w-40 text-lg">{item.id}. {item.Studentname}</p>
                                <button disabled={(item.disable) ? true : false} style={item.disable?{backgroundColor:'gray'}:{backgroundColor:'black'}}onClick={() => { handleChange(item.Studentname,item) }} className="bg-black text-white cursor-pointer border rounded-md p-1 ">Add to Favourite</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )

}
export default ListOfStudents