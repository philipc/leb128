var searchIndex = {};
searchIndex["leb128"] = {"doc":"Read and write DWARF&#39;s &quot;Little Endian Base 128&quot; (LEB128) variable length\ninteger encoding.","items":[[0,"read","leb128","A module for reading signed and unsigned integers that have been LEB128\nencoded.",null,null],[4,"Error","leb128::read","An enumeration of the possible errors that can occur when reading a\nnumber encoded with LEB128.",null,null],[13,"IoError","","There was an underlying IO error.",0,null],[13,"UnexpectedEndOfData","","We were not done reading the number, but there is no more data.",0,null],[13,"Overflow","","The number being read is larger than can be represented.",0,null],[5,"unsigned","","Read an unsigned LEB128 number from the given `std::io::Read`able and\nreturn it or an error if reading failed.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"signed","","Read a signed LEB128 number from the given `std::io::Read`able and\nreturn it or an error if reading failed.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"cause","","",0,null],[0,"write","leb128","A module for writing integers encoded as LEB128.",null,null],[5,"unsigned","leb128::write","Write the given unsigned number using the LEB128 encoding to the given\n`std::io::Write`able. Returns the number of bytes written to `w`, or an\nerror if writing failed.",null,{"inputs":[{"name":"w"},{"name":"u64"}],"output":{"name":"result"}}],[5,"signed","","Write the given signed number using the LEB128 encoding to the given\n`std::io::Write`able. Returns the number of bytes written to `w`, or an\nerror if writing failed.",null,{"inputs":[{"name":"w"},{"name":"i64"}],"output":{"name":"result"}}]],"paths":[[4,"Error"]]};
initSearch(searchIndex);
