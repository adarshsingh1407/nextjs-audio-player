import React from 'react'
import Link from 'next/link'
import PreLoginLayout from '../components/PreLoginLayout'

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <PreLoginLayout playlist={[]}>
          <div>Artist</div>
          <ul>
            <li>
              <Link href='/album' as='/album'>
                <a>Album</a>
              </Link>
            </li>
            <li>
              <Link href='/artist' as='/artist'>
                <a>Artist</a>
              </Link>
            </li>
          </ul>
        </PreLoginLayout>
      </div>
    );
  }
}

export default Artist