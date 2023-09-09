package com.mainproject.server.user.mapper;



import com.mainproject.server.user.dto.AuthLoginDto;
import com.mainproject.server.user.dto.UserDto;
import com.mainproject.server.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

     User postToUser(UserDto.PostDto postDto);

     User patchToUser(UserDto.PatchDto patchDto);



     @Mapping(source = "profileimg.imageUrl", target = "profileimg")
     UserDto.ResponseDto userToResponse(User user);

     List<UserDto.ResponseDto> UsersToResponses(List<User> users);

     @Mapping(source = "profileimg", target = "profileimg")
     User AuthLoginDtoUser(AuthLoginDto authLoginDto);



     }



