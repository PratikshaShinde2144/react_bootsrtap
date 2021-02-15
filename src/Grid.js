import './Grid.css';
function Grid()
{
    return(
      <div>
          <h1 className="text-danger text-center">Bootstrap Grid</h1>

        <div className="row">
        
          <div className="div_1 col-lg-6 col-md-4 col-lg-12"></div>
          <div className="div_2 col-lg-6 col-md-4 col-lg-12"></div>
          <div className="div_3 col-lg-6 col-md-4 col-lg-12"></div>
          
          </div>
      </div>
    );
}
export default Grid;