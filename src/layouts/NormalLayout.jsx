import React from 'react'

const styles = {
  parentContainer: "w-full h-full px-4 md:px-16   ",
  container:
    "2xl:container 2xl:mx-auto ",
 
};

const NormalLayout = ({children}) => {
  return (
    <div className={styles.parentContainer}>
          <div className={styles.container}>
              {children}
      </div>
    </div>
  );
}

export default NormalLayout
