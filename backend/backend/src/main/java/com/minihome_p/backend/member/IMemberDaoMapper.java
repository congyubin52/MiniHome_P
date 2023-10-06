package com.minihome_p.backend.member;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface IMemberDaoMapper {
    boolean isMember(Object id);

    int insertMember(Map<String, Object> msgMap);
}
