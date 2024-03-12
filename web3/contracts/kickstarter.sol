// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract  kickstaterContract {

    struct Project{
    address owner;
    string title;
    string image;
    string description;
    string date;

    }  
    mapping (uint256 => Project) public Projects;
    uint256 public numberofProject=0;

    function createProject(address _owner, string memory  _title ,  string  memory _image ,string memory _description , string memory _date ) public 
    returns(uint256){
        Projects[numberofProject] = Project({
            owner: _owner,
            
            title: _title,
            image: _image,
            description: _description,
            date: _date
        });
          numberofProject++;
        return numberofProject - 1;

    }
 function getProject() public view 
        returns (
           Project[] memory
        )
        {
        Project[] memory allProject = new Project[](numberofProject);
        for(uint i = 0 ; i < numberofProject; i++){
            Project storage item = Projects[i];
            allProject[i] = item;
        }
        return allProject;

    
     
    }
   function updateProject( address _owner , uint256 _projectId, string memory _title, string memory _image, string memory _description, string memory _date) public {
        require(_projectId < numberofProject , "Project does not exist");

        Project storage project = Projects[_projectId];
        project.owner= _owner;
        project.title = _title;
        project.image = _image;
        project.description = _description;
        project.date = _date;
    }
function deletingProject(uint256 _key) public {
        delete  Projects[_key];

}
 
}