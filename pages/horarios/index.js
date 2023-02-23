
const index = () => {
     ////max-w-2xl
  return (
    <>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
    <div className="relative w-full  h-full md:h-auto">
   
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
     
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Administración de Horarios
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form action="#" className="border-b sm:mb-5 dark:border-gray-600">
                <div className="grid gap-4 mb-4 sm:grid-cols-3">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa</label>
                        <input type="text" name="name" id="name" value="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Analisis y Desarrollo de Software"/>
                    </div>
                        <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trimestre</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Primero</option>
                            <option value="TV">Segundo</option>
                            <option value="PC">Tercero</option>
                            <option value="GA">Cuarto</option>
                        </select>
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sede</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">MetalMecanica</option>
                            <option value="TV">Calle 30</option>
                            <option value="PC">Nodo TIC</option>
                        </select>
                    </div>
                </div>

            </form>
            
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Agregar Asignaturas
            </h3>
            </div>
            <form action="#" >
                <div className="grid gap-4 mb-4 sm:grid-cols-3 ">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asignatura</label>
                        <input type="text" name="name" id="name" value="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Desarrollar la solucion..."/>
                    </div>
                        <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Pepe Quintana</option>
                            <option value="TV">Enrique Perez</option>
                            <option value="PC">zzz</option>
                            <option value="GA">zzz</option>
                        </select>
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result. Aprendizaje</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">#1</option>
                            <option value="TV">#2</option>
                            <option value="PC">#3</option>
                        </select>
                    </div>
                    <div>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ambiente</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">DIM1</option>
                            <option value="TV">SOFT1</option>
                            <option value="PC">AUX2</option>
                        </select>
                    </div>
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora Inicio</label>
                        <input type="time" name="name" id="name" value="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Desarrollar la solucion..."/>
                    </div>
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora Fin</label>
                        <input type="time" name="name" id="name" value="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Desarrollar la solucion..."/>
                    </div>
                </div>
                <div className="flex items-center space-x-4 border-b sm:mb-5 dark:border-gray-600">
                    <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">
                        Agregar
                    </button>
                </div>
            </form>

            
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Lunes
                </th>
                <th scope="col" class="px-6 py-3">
                    Martes
                </th>
                <th scope="col" class="px-6 py-3">
                    Miercoles
                </th>
                <th scope="col" class="px-6 py-3">
                    Jueves
                </th>
                <th scope="col" class="px-6 py-3">
                    Viernes
                </th>
                <th scope="col" class="px-6 py-3">
                    Sabado
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    XXXXX
                </th>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    XXXXX
                </th>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    XXXXX
                </th>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
                <td class="px-6 py-4">
                    XXXXX
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    </div>
</div>



    </>
  )
}

export default index