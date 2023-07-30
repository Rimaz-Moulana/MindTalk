package com.javacorner.admin.runner;

import com.javacorner.admin.dto.*;
import com.javacorner.admin.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class MyRunner implements CommandLineRunner {

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProfessionalCounselorService professionalCounselorService;

    @Autowired
    private VolunteerCounselorService volunteerCounselorService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ModeratorService moderatorService;

    @Autowired
    private RegUserService regUserService;

//    @Autowired
//    private InstructorService instructorService;
//
//    @Autowired
//    private CourseService courseService;

//    @Autowired
//    private StudentService studentService;

    @Override
    public void run(String... args) throws Exception {
        createRoles();
        createAdmin();
        createDoctor();
        createProfessionalCounselor();
        createVolunteerCounselor();
        createModerator();
        createRegUsers();
//        createInstructors();
//        createCourses();
        RegUserDTO regUser = createRegUser();
//        assignCourseToStudent(student);
//        createStudents();
    }
    private void createRegUsers(){
        for (int i = 1 ; i < 10 ; i++){
            RegUserDTO regUserDTO = new RegUserDTO();
            regUserDTO.setUsername("RegUserusername" + i);
            regUserDTO.setLocation("location" + i);
            regUserDTO.setContactNo1(Long.valueOf("119" + i));
            regUserDTO.setRelationship1("Dad" + i);
            regUserDTO.setContactNo2(Long.valueOf("118" + i));
            regUserDTO.setRelationship2("mom" + i);
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail("regUser"+i + "@gmail.com");
            userDTO.setPassword("1234");
            regUserDTO.setUser(userDTO);
            regUserService.createRegUser(regUserDTO);
        }

    }
    private void createDoctor(){
        for (int i = 1; i < 10; i++){
            DoctorDTO doctorDTO = new DoctorDTO();
            doctorDTO.setFirstName("doctorFN" + i);
            doctorDTO.setLastName("doctorLN" + i);
            doctorDTO.getDoctorRegNo("RegNo" + i);
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail("doctor" + i + "@gmail.com");
            userDTO.setPassword("1234");
            doctorDTO.setUser(userDTO);
            doctorService.createDoctor(doctorDTO);
        }
    }
    private void createModerator(){
        for (int i = 1; i < 10; i++){
            ModeratorDTO moderatorDTO = new ModeratorDTO();
            moderatorDTO.setFirstName("moderatorFN" + i);
            moderatorDTO.setLastName("moderatorLN" + i);
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail("moderator" + i + "@gmail.com");
            userDTO.setPassword("1234");
            moderatorDTO.setUser(userDTO);
            moderatorService.createModerator(moderatorDTO);
        }
    }

    private void createProfessionalCounselor(){
        for (int i = 1; i < 10; i++){
            ProfessionalCounselorDTO professionalCounselorDTO = new ProfessionalCounselorDTO();
            professionalCounselorDTO.setFirstName("professionalCounselorFN" + i);
            professionalCounselorDTO.setLastName("professionalCounselorLN" + i);
            professionalCounselorDTO.setLicenceNo("LicenseNo" + i);
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail("professionalCounselor" + i + "@gmail.com");
            userDTO.setPassword("1234");
            professionalCounselorDTO.setUser(userDTO);
            professionalCounselorService.createProfessionalCounselor(professionalCounselorDTO);
        }
    }
    private void createVolunteerCounselor(){
        for (int i = 1; i < 10; i++){
            VolunteerCounselorDTO volunteerCounselorDTO = new  VolunteerCounselorDTO();
            volunteerCounselorDTO.setFirstName("volunteerCounselorFN" + i);
            volunteerCounselorDTO.setLastName("volunteerCounselorLN" + i);
            volunteerCounselorDTO.setLicenceNo("LicenseNo" + i);
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail("volunteerCounselor" + i + "@gmail.com");
            userDTO.setPassword("1234");
            volunteerCounselorDTO.setUser(userDTO);
            volunteerCounselorService.createVolunteerCounselor(volunteerCounselorDTO);
        }
    }

//    private void createStudents() {
//        for (int i = 1; i < 10; i++) {
//            StudentDTO studentDTO = new StudentDTO();
//            studentDTO.setFirstName("studentFN" + i);
//            studentDTO.setLastName("studentLN" + i);
//            studentDTO.setLevel("intermediate" + i);
//            UserDTO userDTO = new UserDTO();
//            userDTO.setEmail("student" + i + "@gmail.com");
//            userDTO.setPassword("1234");
//            studentDTO.setUser(userDTO);
//            studentService.createStudent(studentDTO);
//
//        }
//    }


    private void createRoles() {
        Arrays.asList("Admin", "Moderator","Doctor","ProfessionalCounselor","VolunteerCounselor","RegUser").forEach(role -> roleService.createRole(role));
    }

    private void createAdmin() {
        userService.createUser("admin@gmail.com", "1234");
        userService.assignRoleToUser("admin@gmail.com", "Admin");
    }

//    private void createInstructors() {
//        for (int i = 0; i < 10; i++) {
//            InstructorDTO instructorDTO = new InstructorDTO();
//            instructorDTO.setFirstName("instructor" + i + "FN");
//            instructorDTO.setLastName("instructor" + i + "LN");
//            instructorDTO.setSummary("master" + i);
//            UserDTO userDTO = new UserDTO();
//            userDTO.setEmail("instructor" + i + "@gmail.com");
//            userDTO.setPassword("1234");
//            instructorDTO.setUser(userDTO);
//            instructorService.createInstructor(instructorDTO);
//        }
//    }

//    private void createCourses() {
//        for (int i = 0; i < 20; i++) {
//            CourseDTO courseDTO = new CourseDTO();
//            courseDTO.setCourseDescription("Java" + i);
//            courseDTO.setCourseDuration(i + "Hours");
//            courseDTO.setCourseName("Java Course" + i);
//            InstructorDTO instructorDTO = new InstructorDTO();
//            instructorDTO.setInstructorId(1L);
//            courseDTO.setInstructor(instructorDTO);
//            courseService.createCourse(courseDTO);
//        }
//    }

    private RegUserDTO createRegUser() {
        RegUserDTO regUserDTO = new RegUserDTO();
        regUserDTO.setUsername("RegUserusername");
        regUserDTO.setLocation("location");
        regUserDTO.setContactNo1(Long.valueOf("119"));
        regUserDTO.setRelationship1("Dad");
        regUserDTO.setContactNo2(Long.valueOf("118"));
        regUserDTO.setRelationship2("mom");
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("regUser@gmail.com");
        userDTO.setPassword("1234");
        regUserDTO.setUser(userDTO);
        return regUserService.createRegUser(regUserDTO);
    }

//    private void assignCourseToStudent(StudentDTO student) {
//        courseService.assignStudentToCourse(1L, student.getStudentId());
//    }
}
