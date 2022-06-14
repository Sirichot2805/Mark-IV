import { Injectable } from '@nestjs/common';
import { CreateCalSha256Dto } from './dto/create-cal-sha256.dto';
import { UpdateCalSha256Dto } from './dto/update-cal-sha256.dto';

@Injectable()
export class CalSha256Service {
  create(createCalSha256Dto: CreateCalSha256Dto) {
    return 'This action adds a new calSha256';
  }

  findAll() {
    return `This action returns all calSha256`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calSha256`;
  }

  update(id: number, updateCalSha256Dto: UpdateCalSha256Dto) {
    return `This action updates a #${id} calSha256`;
  }

  remove(id: number) {
    return `This action removes a #${id} calSha256`;
  }

  arrToSHA256(arr : [string]){
    console.log(`arr length is ${arr.length}`);
    const crypto = require("crypto");
    const hashArr = [];
    const hashTel = [];
    const Tel = "0846558765,0629794546,0802528846,0994326444,0830467116,0816948899,0962514565,0988803941,0956246563,0984962311,0955958647,0826414229,0877603639,0829242965,0904142956,0915363516,0894900599,0936519391,0892103388,0971596749,0956967078,0811491304,0655173183,0860268640,0954785551,0804046925,0830908419"
    const TelArr = Tel.split(",");
    const runJsTel = [ '0957969451', '0643535664', '0849116700', '0891317979', '0982617936', '0847018889', '0952504828', '0847693754', '0990031206', '0814849584', '0922691636', '0917161020', '0842225639', '0822216236' ]
    console.log({TelArr});
    
    for(let pwd of arr){
      let hash = crypto.createHash('sha256').update(pwd).digest('hex').toUpperCase();
      hashArr.push(hash);
    }

    console.log(`LOG ::: ${hashArr.length} items ::::::`)
    console.log(`---------------------------------------`)
    console.log(hashArr.toString());
    
    for(let pwd of runJsTel){
      let hash = crypto.createHash('sha256').update(pwd).digest('hex').toUpperCase();
      hashTel.push(hash);
    }

    console.log(`LOG ::: ${hashTel.length} items ::::::`)
    console.log(`---------------------------------------`)
    console.log(hashTel.toString());

    return hashArr.toString()
  }

  
}
