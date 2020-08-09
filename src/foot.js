import React, { Component } from 'react'
import styles from './foot.module.css'



class Foot extends Component {
  render () {
    return (
        <footer className={styles.footer}>
            <div>
            <strong>Design by Amit kumar, 2020.</strong>
            <p><strong> copyright © CGC</strong></p>
            <p>
              <a class="flink"  href="https://www.facebook.com/profile.php?id=100036303918297"><i class="fab fa-facebook text-white fa-2x fa-fw"></i></a><span>    </span>
              <a class="flink" href="https://twitter.com/_iamamitkumar_"><i class="fab fa-twitter-square text-white fa-2x fa-fw"></i></a><span>     </span>
              <a class="flink" href="https://www.instagram.com/i_.am_.amitkumar/"><i class="fab fa-instagram text-white fa-2x fa-fw"></i></a>
          </p>
        </div>
        </footer>

    )
  }
}

export default Foot
