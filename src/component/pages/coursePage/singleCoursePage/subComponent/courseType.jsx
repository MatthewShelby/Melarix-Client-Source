function CourseType({ courseTypeIndex }) {
      var courseType = 'tutorial';
      switch (courseTypeIndex) {
            case 0:
                  courseType = 'tutorial';
                  break;
            case 1:
                  courseType = 'full-course';
                  break;
            case 2:
                  courseType = 'crash-course';
                  break;
            case 3:
                  courseType = 'mini-course';
                  break;
            case 4:
                  courseType = 'other';
                  break;

            default:
                  courseType = 'unknown';
                  break;
      }

      return (courseType)
}

export default CourseType