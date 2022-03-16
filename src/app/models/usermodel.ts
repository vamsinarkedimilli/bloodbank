export class Users{
  public name:string;
  public age:string;
  public bloodgroup:string;
  public contactnumber:string;
  public alternateconatct:string;
  public state:string;
  public district:string;
  public city:string;

  constructor(name:string,age:string,bloodgroup:string,contactnumber:string,alternatecontact:string,state:string,district:string,city:string) {
    this.name=name;
    this.age=age;
    this.bloodgroup=bloodgroup;
    this.contactnumber=contactnumber;
    this.alternateconatct=alternatecontact;
    this.state=state;
    this.district=district;
    this.city=city;
  }
}
