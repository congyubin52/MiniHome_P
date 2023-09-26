package com.minihome_p.backend.member;

import lombok.Data;

@Data
public class MemberDto {
    private int m_no;
    private String m_id;
    private String m_pw;
    private String m_name;
    private String m_mail;
    private String m_phone;
    private String m_nickname;
    private int use_yn;
    private String m_reg_date;
    private String m_mod_date;
}
